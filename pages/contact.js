import { Fragment, useEffect } from "react";
import ContactForm from "../components/contact/contact-form";
import { useSelector, useDispatch } from "react-redux";
import Notification from "../components/ui/notification";

function ContactPage() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <ContactForm />
    </Fragment>
  );
}
export default ContactPage;
