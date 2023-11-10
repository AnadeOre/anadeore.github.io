import Link from 'next/link';
import React from 'react';
import DissertationDiv from '../components/DissertationDiv';
const Page = () => {
  return (
    <div>
      <h1>Research</h1>
      <ul>
        <DissertationDiv
          title='Undergraduate dissertation (spanish)'
          description='For the title "Licenciada en matemática aplicada" at UNL. Supervised by
          Marisa Toschi and Mauricio Ramseyer.'
          linkURL='/UndergradDissertation.pdf'
          linkDesc='Homogeneous Type Spaces and Metrisation'
        />
      </ul>
    </div>
  );
};

export default Page;
