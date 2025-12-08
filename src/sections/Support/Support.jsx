import Section from '@/layouts/Section';
import './Support.scss';
import Field from '@/components/Field';
import Button from '@/components/Button';

const Support = () => {
  return (
    <Section
      className="support"
      mode="support"
      isContainer={false}
      title="Get in touch"
      titleId="support-title"
      description="Send your message to us"
    >
      <form className="support__form" action="">
        <Field 
          className="support__form-cell"
          label="Full name"
          placeholder="Ivan Ivanov"
          isRequired
        />
        <Field 
          className="support__form-cell"
          label="Email"
          type="email"
          placeholder="johndoe@gmail.com"
          isRequired
        />
        <Field 
          className="support__form-cell"
          label="Phone"
          placeholder="(999) 999 99-99"
          isRequired
          inputMode="tel"
          mask="(000) 000-00-00"
        />
        <Field 
          className="support__form-cell"
          label="Subject"
          placeholder="Subject..."
          isRequired
        />
        <Field 
          className="support__form-cell support__form-cell--wide"
          label="Message"
          type="textarea"
          placeholder="Your message goes here..."
          isRequired
        />
      </form>
      <div className="support__actions">
        <span className="support__required">
          <span className="support__required-star">*</span>
          required
        </span>
        <Button 
          className="support__button"
          type="submit"
          label="Send message"
        />
        <p className="support__text">
          Viverra at port accumsan. <a href="./">Orci non</a> 
        </p>
      </div>
    </Section>
  );
};

export default Support;