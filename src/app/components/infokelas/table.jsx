const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-lg table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th>MASTER CHOA KOK SUI COURSE</th>
            <th>PREREQUISITE</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Basic Pranic Healing</td>
            <td>Open to Public</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Advanced Pranic Healing</td>
            <td>Basic Panic Healing Course</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Pranic Psychotherapy</td>
            <td>Basic and Advanced</td>
          </tr>
          <tr>
            <th>4</th>
            <td>Psychic Self-Defense</td>
            <td>Basic, Advanced and Psycho</td>
          </tr>
          <tr>
            <th>5</th>
            <td>Pranic Crystal Healing</td>
            <td>Basic, Advanced and Psycho</td>
          </tr>
          <tr>
            <th>6</th>
            <td>Achieving Oneness</td>
            <td>Open to Public</td>
          </tr>
          <tr>
            <th>7</th>
            <td>Superbrain Yoga</td>
            <td>Open to Public</td>
          </tr>
          <tr>
            <th>8</th>
            <td>Pranic Feng Shui</td>
            <td>Basic Advanced</td>
          </tr>
          <tr>
            <th>9</th>
            <td>Arhatic Yoga Preparatory</td>
            <td>Basic, Adv, Psycho, AOHS</td>
          </tr>
          <tr>
            <th>10</th>
            <td>Kriyashakti</td>
            <td>Basic, Adv, Psycho, AOHS, Arhatic</td>
          </tr>
          <tr>
            <th>11</th>
            <td>Spiritual Business Management</td>
            <td>Basic Pranic Healing Course</td>
          </tr>
          <tr>
            <th>12</th>
            <td>Spiritual Essence of Man</td>
            <td>Basic Pranic Healing Course</td>
          </tr>
          <tr>
            <th>13</th>
            <td>Pranic Psychotherapy</td>
            <td>Basic dan Advanced</td>
          </tr>
          <tr>
            <th>14</th>
            <td>Pranic Face Lift & Body Sculpting</td>
            <td>Basic, Adv, Psycho, Crystal</td>
          </tr>
          <tr>
            <th>15</th>
            <td>Arhatic Yoga Level I & Level II</td>
            <td>Basic, Adv, Psycho, AOHS, AY Prep</td>
          </tr>
          <tr>
            <th>16</th>
            <td>Higher Clairvoyance</td>
            <td>AY Level II</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table
