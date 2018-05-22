interface PagePaInterface {
  isOpen: () => Promise<boolean[]>;
}


class PagePa implements PagePaInterface {

  isOpen() {
    return Promise.all([Promise.resolve(true)]);
  }

}


module.exports = PagePa;
export default PagePa;
