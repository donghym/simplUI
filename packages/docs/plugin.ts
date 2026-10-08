import path from 'path';
import type { IApi } from 'umi';

/** dumi 的源码目录是 .dumi，不会自动收集 src/global.css，这里显式打进入口。 */
export default (api: IApi) => {
  api.addEntryImportsAhead(() => [
    { source: path.resolve(__dirname, 'src/global.css') },
  ]);
};
