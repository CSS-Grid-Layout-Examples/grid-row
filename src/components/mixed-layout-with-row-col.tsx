/* app imports */
import getJBIcons from "@common/data/get-jb-icons";

/* component */
function MixedLayoutWithRolCol(): JSX.Element {
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  const brandsData = getJBIcons().splice(0, 9);
  return (
    <>
      <div className="container mixedLayoutWithRowCol">
        <ul className="list-unstyled">
          {
            brandsData.map((obj, index) => {
              return (
                <li key={index} className="brandItem text-center positionRelative">
                  <div className="image positionRelative">
                    <img src={`${IMG_ROOT}${obj.src}`}
                    className="img-fluid" alt={obj.alt} title={obj.title}/>
                  </div>
                    <span>{obj.title}</span>
                </li>
              );
            })
          }
        </ul>
        <p className="info text-center">
          <b>Item 3</b> is configured to span both two columns and two rows, creating a large 2x2 grid area within the container.
          This makes it take up the equivalent space of four standard grid items, allowing it to serve as a focal point in the layout.
        </p>
      </div>
    </>
  );
}

/* exports */
export default MixedLayoutWithRolCol;
