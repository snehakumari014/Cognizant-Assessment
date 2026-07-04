USE OnlineRetailStore;
GO

-- Display all products
SELECT * FROM Products;

-- ROW_NUMBER()
SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    ROW_NUMBER() OVER(
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS RowNum
FROM Products;

-- RANK()
SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    RANK() OVER(
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS RankNum
FROM Products;

-- DENSE_RANK()
SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    DENSE_RANK() OVER(
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS DenseRank
FROM Products;

-- Top 3 most expensive products in each category
WITH RankedProducts AS
(
    SELECT
        ProductID,
        ProductName,
        Category,
        Price,
        ROW_NUMBER() OVER(
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS RowNum
    FROM Products
)
SELECT *
FROM RankedProducts
WHERE RowNum <= 3;
