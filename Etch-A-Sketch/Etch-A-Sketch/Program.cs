var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

//app.MapGet("/", () => "Hello World!");
app.UseDefaultFiles();  // sucht index.html
app.UseStaticFiles();
app.Run();
