interface BasePagePoInterface {
  name: string;
  staticElements: Promise<boolean>[];
}


class BasePagePo implements BasePagePoInterface {

  name = 'Base';

  get staticElements() {
    return [Promise.reject(new Error('staticElements getter should be overridden in child classes'))];
  }

}


export {BasePagePo};