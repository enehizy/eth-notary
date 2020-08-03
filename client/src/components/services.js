import React from 'react';
import Service from './service';

const Services=()=>
{
    return(
        <section className="services">
          <Service title="Create Hash" service="hash" description="Create a unique id for your document" logo="/img/hash_document.svg"/>
          <Service title="Notarize Document" service="notorize" description="Get any digtal document notarized" logo="/img/notorize_document.svg"/>
          <Service title="Verify Document" service="verify" description="Confirm information about documents" logo="/img/verify_document.svg"/>
        </section>
    )
}
export default Services;