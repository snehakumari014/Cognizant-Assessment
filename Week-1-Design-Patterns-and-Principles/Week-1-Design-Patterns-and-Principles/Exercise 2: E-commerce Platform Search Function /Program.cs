using System;

public class Product
{
    public int ProductId;
    public string ProductName;
    public string Category;

    public Product(int productId, string productName, string category)
    {
        ProductId = productId;
        ProductName = productName;
        Category = category;
    }
}

class Program
{
    // Linear Search
    static Product LinearSearch(Product[] products, int productId)
    {
        foreach (Product product in products)
        {
            if (product.ProductId == productId)
            {
                return product;
            }
        }
        return null;
    }

    // Binary Search
    static Product BinarySearch(Product[] products, int productId)
    {
        int left = 0;
        int right = products.Length - 1;

        while (left <= right)
        {
            int mid = (left + right) / 2;

            if (products[mid].ProductId == productId)
                return products[mid];

            if (products[mid].ProductId < productId)
                left = mid + 1;
            else
                right = mid - 1;
        }

        return null;
    }

    static void Main(string[] args)
    {
        Product[] products =
        {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Phone", "Electronics"),
            new Product(103, "Bag", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Shoes", "Fashion")
        };

        int searchId = 104;

        Product linearResult = LinearSearch(products, searchId);

        Console.WriteLine("Linear Search Result:");
        if (linearResult != null)
            Console.WriteLine(linearResult.ProductName);
        else
            Console.WriteLine("Product Not Found");

        Product binaryResult = BinarySearch(products, searchId);

        Console.WriteLine("\nBinary Search Result:");
        if (binaryResult != null)
            Console.WriteLine(binaryResult.ProductName);
        else
            Console.WriteLine("Product Not Found");
    }
}
