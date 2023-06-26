import SVG from "../useHooks/useSVG";

const ChangePage = ({ changePage, curPage, maxPage }) => {
    return (
      <div className="grid-footer main-flbx">
        <div onClick={() => changePage(curPage ? -1 : 1)}>
            <SVG ability = 'left'></SVG>
        </div>
        {curPage ? `${curPage}/${maxPage}` : 
        <div className="switch">
            <p>{maxPage ? 'switch1' : 'switch 2'}</p>
        </div>}
        <div onClick={() => changePage(curPage ? 1 : -1)}>
            <SVG ability = 'right'></SVG>
        </div>
      </div>
    );
  };
export default ChangePage;