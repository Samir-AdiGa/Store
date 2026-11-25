import AuthLayout from "../../../layouts/AuthLayout";
import VerificationForm from "./VerificationForm";

const VerificationPage = () => {
  return (
    <AuthLayout>
      <VerificationForm 
        phoneNumber="0923423414" 
        onGoBack={() => console.log("Going back...")} 
      />
    </AuthLayout>
  );
};

export default VerificationPage;