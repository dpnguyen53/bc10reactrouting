import "./App.css";
import { useEffect, Suspense, lazy } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { RoutesHome, RoutesAdmin } from "./routes";
import { actTryLogin } from "./containers/AdminTemplate/Auth/modules/actions";
import { useDispatch } from "react-redux";

const AuthComponent = lazy(() => import("containers/AdminTemplate/Auth"));
const PageNotFound = lazy(() => import("containers/PageNotFound"));

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actTryLogin(props.history));
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {RoutesHome()}
        {RoutesAdmin()}

        {/* Auth */}
        <Route path="/auth" component={AuthComponent} />
        {/* Trang không tồn tại - để cuối cùng */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </Suspense>
  );
}

export default withRouter(App);
