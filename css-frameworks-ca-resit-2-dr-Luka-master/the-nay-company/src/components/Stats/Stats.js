// import Table from "react-bootstrap/Table";

export default function Stats() {
  return (
    <>
      <h2>Stats</h2>

      <table>
        <tr id="table-head">
          <th>ID</th>
          <th>NAME</th>
          <th>PHONE</th>
          <th className="hidden">CITY</th>
          <th className="hidden">DEPARTMENT</th>
        </tr>
        <tr>
          <td>12</td>
          <td>Tincidut</td>
          <td>25 25 60 11</td>
          <td className="hidden">Oslo</td>
          <td className="hidden">HR</td>
        </tr>
        <tr>
          <td>45</td>
          <td>Ullamcorper</td>
          <td>13 17 64 45</td>
          <td className="hidden">Amsterdam</td>
          <td className="hidden">Annoying People</td>
        </tr>
        <tr>
          <td>45</td>
          <td>Pretium</td>
          <td>12 47 68 77</td>
          <td className="hidden">Tokyo</td>
          <td className="hidden">Mud Slinging</td>
        </tr>
        <tr>
          <td>234</td>
          <td>Libero</td>
          <td>45 23 55 43</td>
          <td className="hidden">Berlin</td>
          <td className="hidden">Chicken Chasing</td>
        </tr>
        <tr>
          <td>76</td>
          <td>Tellus</td>
          <td>44 29 01 22</td>
          <td className="hidden">Lagos</td>
          <td className="hidden">Going for Lunch</td>
        </tr>
        <tr>
          <td>48</td>
          <td>Libero</td>
          <td>55 24 04 84</td>
          <td className="hidden">Maputo</td>
          <td className="hidden">Actually Doing Things</td>
        </tr>
      </table>
    </>
  );
}
