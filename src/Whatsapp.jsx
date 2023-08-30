import React, { useState } from 'react';

const data = [
  { name: 'ankit', phone: '9798347787', message: 'Hello ankit!' },
  { name: 'Gourav', phone: '8404821060', message: 'Hello gourav!' },
  { name: 'Subash', phone: '8697155024', message: 'Hello subash!' },
  { name: 'Vikash', phone: '8093482905', message: 'Hello vikash!' },
  { name: 'Viku', phone: '8114657540', message: 'Hello viku!' },
];

const Whatsapp = () => {
  const [showTable, setShowTable] = useState(false);
  const [whatsappIndex, setWhatsappIndex] = useState(0);

  const handleButtonClick = () => {
    setShowTable(true);
    sendMessage(whatsappIndex);
  };

  const sendMessage = async (index) => {
    if (index >= data.length) {
      setWhatsappIndex(0);
      setShowTable(false);
      return;
    }

    const number = data[index].phone;
    const message = data[index].message;

    // Simulate opening WhatsApp and sending a message
    console.log(`Sending message to ${number}: ${message}`);

    // Simulate closing WhatsApp
    console.log(`Closing WhatsApp for ${number}`);

    // Move to the next index
    setWhatsappIndex(index + 1);

    // Simulate a delay before sending the next message
    setTimeout(() => sendMessage(whatsappIndex), 1000);
  };

  return (
    <div className='container'>
      <button onClick={handleButtonClick}>Start Sending Messages</button>
      {showTable && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>
                  <a
                    href={`https://web.whatsapp.com/send?phone=${item.phone}&text=${encodeURIComponent(item.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.phone}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Whatsapp;
