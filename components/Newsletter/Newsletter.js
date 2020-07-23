import React, {useRef} from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import clsx from 'clsx';
import styles from './Newsletter.module.css'

const url = 'https://explaincssto.us10.list-manage.com/subscribe/post?u=e39eaa5ccaa32d3a302aebc53&amp;id=ade287728f';

const Newsletter = () => {
    const emailRef = useRef(null);

    return(
        <div id="newsletter-subscribe" className={clsx(styles.newsletter)}>
            <h3>📇 Subscribe for Updates</h3>
            <p>I keep this page up to date with the latest standards, so please subscribe below and you'll be notified when new content is added.</p>
            <MailchimpSubscribe url={url} render={({ subscribe, status, message }) =>  {

                const errorMessage = status => {
                    switch(status) {
                        case "sending":
                            return <p>Sending...</p>
                        case "success":
                            return <p>Subscribed.</p>
                        case "error":
                            return <p dangerouslySetInnerHTML={{ __html: message.replace('0 -', '🙋🏼‍♂️') }} />
                    }
                }

                return (
                    <>
                        <form className={styles.form} onSubmit={e => {
                            e.preventDefault();

                            subscribe({
                                EMAIL: emailRef.current.value,
                            })
                        }}>
                            <label htmlFor="email-address">
                                <input aria-label="Enter email address" id="email-address" className={styles.input} type="email" ref={emailRef} placeholder="Enter your email address" />
                            </label>

                            <input className={styles.button} type="submit" value="subscribe" />
                        </form>
                        <div className={styles.message}>
                            {errorMessage(status)}
                        </div>
                    </>
                );
            }} />
        </div>
    );
}

export default Newsletter;