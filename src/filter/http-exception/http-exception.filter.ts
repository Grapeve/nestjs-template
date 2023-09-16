import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let statusCode: number, error: any, message: any;

    if ((exception as any).code) {
      // sql 异常或业务层的异常
      statusCode = 500;
      error = (exception as any).code;
      message = (exception as any).message;
    } else if (exception instanceof HttpException) {
      // 框架层的Http异常
      const exceptionRes = exception.getResponse();
      statusCode = (exceptionRes as any).statusCode;
      error = (exceptionRes as any).error;
      message = (exceptionRes as any).message;
    } else {
      // 其他异常
      statusCode = 500;
      error = (exception as any).code;
      message = (exception as any).message;
    }

    const msgLog = {
      status: statusCode,
      error,
      message,
      path: request.url,
      timestamp: new Date().toLocaleString(),
    };

    response.status(statusCode).json(msgLog);
  }
}
