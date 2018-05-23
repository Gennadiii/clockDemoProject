interface PagePaInterface {
  isOpen: () => Promise<boolean[]>;
}


class PagePa implements PagePaInterface {

  isOpen() {
    return Promise.all([Promise.resolve(true)]);
  }

}


export {PagePa};
