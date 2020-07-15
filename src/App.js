import React from 'react';
import SignInForm from '../src/componenet/signin';
import SignupFormPage from '../src/componenet/signup';
import DetailsInformation from '../src/componenet/steperDetails'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <SignupFormPage />
      <SignInForm />
      <DetailsInformation/>
<p>hello</p>
    </div>
  );
}

export default App;
