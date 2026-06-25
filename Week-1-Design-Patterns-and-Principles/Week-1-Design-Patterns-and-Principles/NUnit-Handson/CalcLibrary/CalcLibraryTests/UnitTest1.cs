using NUnit.Framework;
using CalcLibrary;

namespace CalcLibraryTests
{
    [TestFixture]
    public class CalculatorTests
    {
        private SimpleCalculator calc;

        [SetUp]
        public void Setup()
        {
            calc = new SimpleCalculator();
        }

        [TearDown]
        public void Cleanup()
        {
        }

        [TestCase(10, 20, 30)]
        [TestCase(5, 5, 10)]
        [TestCase(100, 200, 300)]
        public void Addition_Test(double a, double b, double expected)
        {
            double actual = calc.Addition(a, b);

            Assert.That(actual, Is.EqualTo(expected));
        }
    }
}
