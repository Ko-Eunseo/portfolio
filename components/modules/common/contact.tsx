import styles from "@/styles/layouts/footer.module.scss";

const Contact = () => {
  const contactMe = [
    { name: "mail", href: "eunseogo48@gmail.com" },
    { name: "velog", href: "https://velog.io/@koyk0408" },
    { name: "github", href: "https://github.com/Ko-Eunseo" },
  ];
  return (
    <>
      <address className={styles.footer_address}>
        <ul>
          {contactMe.map((contact, i) => {
            return (
              <li key={i} className={styles.footer_address_item}>
                <a
                  className={styles.footer_mail}
                  target="_blank"
                  href={`mailto:${contact.href}`}
                  rel="noreferrer"
                >
                  {contact.href}
                </a>
              </li>
            );
          })}
        </ul>
      </address>
    </>
  );
};

export default Contact;
