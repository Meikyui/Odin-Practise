var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseDefaultFiles();  // sucht index.html
app.UseStaticFiles(); 
app.Run();
