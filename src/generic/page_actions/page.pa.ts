interface IPagePa {
    isOpen: () => Promise<boolean[]>;
}


class PagePa implements IPagePa {

    isOpen() {
        return Promise.all([Promise.resolve(true)]);
    }

}


export {PagePa, IPagePa};