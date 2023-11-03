import { useSelector } from "react-redux";

const ListView = () => {
  const store = useSelector((store) => store);

  return (
    <div>
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>Tail Code</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {store.flights &&
            store.flights.map((fly, i) => (
              <tr key={i}>
                <td>{fly.id}</td>
                <td>{fly.code}</td>
                <td>{fly.lat}</td>
                <td>{fly.lang}</td>
                <td>
                  <button>Detail</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
