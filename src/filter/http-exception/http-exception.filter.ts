import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let statusCode: number, error: any, message: any;
    if ((exception as any).code) {
      // sql error
      statusCode = 500;
      error = (exception as any).code;
      message = (exception as any).message;
    } else {
      const exceptionRes = exception.getResponse();
      statusCode = (exceptionRes as any).statusCode;
      error = (exceptionRes as any).error;
      message = (exceptionRes as any).message;
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
