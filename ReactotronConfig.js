import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import { AsyncStorage } from "react-native";
console.tron = Reactotron;

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({ host: "192.168.1.67" })
  .use(reactotronRedux())
  .useReactNative()
  .connect();

export default reactotron;
