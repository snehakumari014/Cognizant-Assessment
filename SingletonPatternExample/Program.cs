Logger logger1 = Logger.GetInstance();

Logger logger2 = Logger.GetInstance();

logger1.Log("Application Started");
logger2.Log("User Logged In");

if (logger1 == logger2)
{
    Console.WriteLine("Same Instance");
}
else
{
    Console.WriteLine("Different Instance");
}