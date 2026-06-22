-- Employee Management System
-- Exercise : Create a Stored Procedure

CREATE PROCEDURE sp_GetEmployeesByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT *
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;
GO

-- Test the procedure
EXEC sp_GetEmployeesByDepartment @DepartmentID = 3;
