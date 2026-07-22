function App() {

  const officeImage = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800";

  const offices = [
    {
      name: "Regus Business Center",
      rent: 55000,
      address: "Bangalore"
    },
    {
      name: "WeWork Office Space",
      rent: 75000,
      address: "Hyderabad"
    },
    {
      name: "SmartWorks",
      rent: 48000,
      address: "Pune"
    },
    {
      name: "Awfis Office",
      rent: 90000,
      address: "Chennai"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office Space"
        style={{ width: "500px", height: "300px" }}

       
      />

      <hr />

      {
        offices.map((office, index) => (
          <div key={index}>

            <h2>{office.name}</h2>

            <p>
              <b>Address:</b> {office.address}
            </p>

            <p>
              <b>Rent:</b>{" "}
              <span
                style={{
                  color: office.rent < 60000 ? "red" : "green",
                  fontWeight: "bold"
                }}
              >
                ₹{office.rent}
              </span>
            </p>

            <hr />

          </div>
        ))
      }

    </div>
  );
}

export default App;