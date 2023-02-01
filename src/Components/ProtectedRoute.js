import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ isEmpty, children }) => {
    if (isEmpty) { 
    return <Navigate to="/" replace />;
}
return children;
};
  export default ProtectedRoute