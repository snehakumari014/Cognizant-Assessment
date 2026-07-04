using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace FirstWebApi.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            string path = "ExceptionLog.txt";

            File.AppendAllText(
                path,
                $"[{DateTime.Now}] {context.Exception.Message}{Environment.NewLine}"
            );

            context.Result = new ObjectResult(new
            {
                Message = "An internal server error occurred."
            })
            {
                StatusCode = StatusCodes.Status500InternalServerError
            };

            context.ExceptionHandled = true;
        }
    }
}