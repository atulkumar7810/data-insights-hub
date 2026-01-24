

# EmailJS Integration Plan

## Overview
Integrate EmailJS with your contact form so that when someone submits the form, you receive the message details directly in your Gmail inbox.

## Your EmailJS Credentials
- **Public Key:** 1FxKvIoUbpQKGLEBr
- **Template ID:** template_dpposom
- **Service ID:** service_1njnomn

## Implementation Steps

### Step 1: Install EmailJS Package
Add the `@emailjs/browser` package to your project dependencies.

### Step 2: Update ContactSection.tsx
Modify the contact form component to:

1. **Import EmailJS** - Add the EmailJS browser SDK import
2. **Initialize EmailJS** - Set up EmailJS with your public key on component mount
3. **Update handleSubmit function** - Replace the simulated submission with actual EmailJS API call:
   - Send email using `emailjs.send()` with your Service ID, Template ID, and form data
   - Handle success: Show success toast and reset form
   - Handle errors: Show error toast with helpful message
4. **Add form reference** - Use a form ref for EmailJS to capture form data

### Step 3: Template Variable Mapping
Your form fields will map to EmailJS template variables:

| Form Field | Template Variable |
|------------|-------------------|
| `name` | `{{from_name}}` or `{{name}}` |
| `email` | `{{from_email}}` or `{{email}}` |
| `subject` | `{{subject}}` |
| `message` | `{{message}}` |

**Note:** Make sure your EmailJS email template uses these variable names, or I can adjust the code to match your template's variable names.

---

## Technical Details

### Code Changes in ContactSection.tsx

```text
Changes to make:
1. Add import: import emailjs from '@emailjs/browser'
2. Add useEffect to initialize EmailJS with public key
3. Add formRef using useRef<HTMLFormElement>
4. Replace handleSubmit logic with emailjs.send() call
5. Add error handling with appropriate toast messages
```

### Error Handling
- Network failures: Show "Failed to send. Please check your connection."
- EmailJS errors: Show specific error message
- Success: Show "Message sent successfully!" confirmation

### Security Note
The EmailJS public key is safe to include in frontend code - it's designed to be public and only allows sending emails through your configured templates.

---

## Files to Modify

| File | Changes |
|------|---------|
| `package.json` | Add `@emailjs/browser` dependency |
| `src/components/ContactSection.tsx` | Integrate EmailJS send functionality |

## Expected Result
After implementation, when someone fills out and submits the contact form:
1. Form shows "Sending..." state
2. EmailJS sends the message to your Gmail
3. User sees success confirmation
4. Form resets for new submission
5. You receive an email with: sender name, email, subject, and message

