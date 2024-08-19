// src/components/SubscribeForm.js
import React, { useState } from 'react';

import addToMailchimp from 'gatsby-plugin-mailchimp';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addToMailchimp(email);
    setResult(response);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white inline-flex p-2 rounded-full border inline-block mt-8 border-gray-400 ">
        <input
          type="email"
          placeholder="E-mailadres" className="pl-1 md:p-3 rounded-full md:flex-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
       <button type="submit" href="/contact" class="btn btn-marketing flex-grow md:flex-grow-0"><span title="Schrijf je in" class="title"></span>

                      <span class="arrow_circle">
                        <span class="arrow">
                          <svg id="arrow_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18.6 18">

                        <path class="cls-1" d="M8.5,3.8L1.4,10.9l-1.4-1.4L9.5,0l9.2,9.2-1.4,1.4-6.8-6.8v14.2h-2V3.8Z"></path>
                      </svg>
                      <svg id="arrow_2" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18.6 18">

                        <path class="cls-1" d="M8.5,3.8L1.4,10.9l-1.4-1.4L9.5,0l9.2,9.2-1.4,1.4-6.8-6.8v14.2h-2V3.8Z"></path>
                      </svg>
                        </span>
                      </span>
                      </button>
      </form>
      {result && (
        <div>
          {result.result === 'success' ? (
            <p>Wat leuk dat je je hebt ingeschreven voor onze nieuwsbrief!</p>
          ) : (
            <p>{result.msg}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SubscribeForm;