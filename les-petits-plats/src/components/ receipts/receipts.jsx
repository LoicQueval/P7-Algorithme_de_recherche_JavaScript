import React from 'react';

export const Receipts = ({ data }) => {
    return (
        <section>
            {data && (<article>
                {
                    data.map((item) => (
                        <div>{item.id}</div>
                    ))
                }
            </article>)}
        </section>
    );
}
