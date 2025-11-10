"use client"
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";
import ReduxExamples from "./ReduxExamples";
import store from "./store";
import { Provider } from "react-redux";
import HelloRedux from "./ReduxExamples/HelloRedux";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }
  return (
    <Provider store={store}>
    <div id="wd-lab4">
      <h3>Lab 4</h3>
      <h3>Managing State and User Input with Forms</h3>
      <div>
        <ClickEvent/>
      </div>
      <div>
        <PassingDataOnEvent/>
      </div>
      <div>
        <PassingFunctions theFunction={sayHello}/>
      </div>
      <div>
        <EventObject/>
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <BooleanStateVariables/>
      </div>
      <div>
        <StringStateVariables/>
      </div>
      <div>
        <DateStateVariable/>
      </div>
      <div>
        <ObjectStateVariable/>
      </div>
      <div>
        <ArrayStateVariable/>
      </div>
      <div>
        <ParentStateComponent/>
      </div>
      <div>
        <ReduxExamples/>
      </div>
    </div>
    </Provider>
  );}