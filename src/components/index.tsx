/* app imports */
import "./css/style.scss";
import SimpleRowSpanLayout from "./simple-row-span-layout";
import GridRowStartEndLayout from "./grid-row-start-end-layout";
import MixedLayoutWithRolCol from "./mixed-layout-with-row-col";
import TwoTowersLayout from "./two-towers-layout";

/* component */
function AppOutlet(): JSX.Element {
  return (
    <>
      <SimpleRowSpanLayout />
      <GridRowStartEndLayout />
      <MixedLayoutWithRolCol />
      <TwoTowersLayout />
    </>
  );
}

/* exports */
export default AppOutlet;
