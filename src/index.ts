import { runStrategyDemo } from "./services/strategy/demo";
import { runFactoryDemo } from "./services/factory/demo";
import { runFacadeDemo } from "./services/facade/demo";
import { runIteratorDemo } from "./services/iterator/demo";
import { runSingletonDemo } from "./services/singleton/demo";
import { runObserverDemo } from "./services/observer/demo";

console.log("╔══════════════════════════════════════╗");
console.log("║   Design Patterns in Node.js (TS)    ║");
console.log("╚══════════════════════════════════════╝\n");

runStrategyDemo();
runFactoryDemo();
runFacadeDemo();
runIteratorDemo();
runSingletonDemo();
runObserverDemo();
