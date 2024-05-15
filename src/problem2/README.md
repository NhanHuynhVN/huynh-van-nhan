# Fancy Form

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Dependencies
* `antd`: UI library.
* `axios`: Promise based HTTP client for the browser.
* `typescript`: JavaScript superset that extends JavaScript by adding types.
* `tailwindcss`: CSS framework.
* `prettier`: Code formatter.

## Project Structure
* `src/assets`: contains token images.
* `src/components`: contains all customize components.
  * `CurrencyConverter.tsx`: main converter form.
  * `CustomizeButton.tsx`: customize button (currently used for submit button, have loading state).
  * `ErrorMessage.tsx`: error message component (the message below the input when the input is invalid after submitting).
  * `InputAmount.tsx`: input amount component (format number input).
  * `SelectCurrency.tsx`: select currency component (select currency from dropdown with token icon, can be searched).
* `src/constants`: contains all constants.
  * `api.ts`: contains all api endpoints.
* `src/contexts`:
  * `AntdConfigProvider.tsx`: config antd theme.
* `src/hooks`:
  * `useCurrency.ts`: custom hook to fetch currency list.
* `src/services`: contains all services.
  * `currency.ts`: fetch data from api.
* `src/types`: contains all types.
