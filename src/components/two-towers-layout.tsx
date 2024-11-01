/* app imports */
import getJBIcons from "@common/data/get-jb-icons";

/* component */
function TwoTowersLayout(): JSX.Element {
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  const brandsData = getJBIcons().splice(0, 5);
  return (
    <>
      <div className="container twoTowersLayout">
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
          In this layout, the <b>First Item</b> and <b>Last Item</b> are set to expand across from
          row-line-1 to row-line-4. All items span across only 1 column.
        </p>
      </div>
    </>
  );
}

/* exports */
export default TwoTowersLayout;
