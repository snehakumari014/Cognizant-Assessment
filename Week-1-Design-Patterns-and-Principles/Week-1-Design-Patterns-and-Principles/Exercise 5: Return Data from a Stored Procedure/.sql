-- Exercise 5: Return Data from a Stored Procedure

CREATE PROCEDURE sp_GetEmployeeCountByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT COUNT(*) AS TotalEmployees
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;
GO

-- Test the procedure
EXEC sp_GetEmployeeCountByDepartment @DepartmentID = 3;
