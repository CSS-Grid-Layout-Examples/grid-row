/* app imports */
import getJBIcons from "@common/data/get-jb-icons";

/* component */
function GridRowStartEndLayout(): JSX.Element {
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  const brandsData = getJBIcons().splice(0, 5);
  return (
    <>
      <div className="container gridRowStartEndLayout">
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
          <b>Item 2</b> starts in the first row and spans until the third row, occupying two rows vertically.
          It is also positioned in the third column. This layout is useful for asymmetric designs.
        </p>
      </div>
    </>
  );
}

/* exports */
export default GridRowStartEndLayout;
