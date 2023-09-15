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

    const exceptionRes = exception.getResponse();
    const { statusCode, error, message } = exceptionRes as any;

    const msgLog = {
      status: statusCode,
      error,
      message,
      path: request.url,
      timestamp: new Date().toLocaleString(),
    };

    response.status(400).json(msgLog);
  }
}
