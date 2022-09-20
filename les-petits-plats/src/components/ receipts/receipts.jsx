import React from 'react';
import './receipts.css';

export const Receipts = ({data}) => {
    return (
        <section>
            {data && (<div className="test">
                {
                    data.map((item) => (
                        <article>
                            <div className="image"></div>
                            <div className="card">
                                <div className="heading">
                                    <h2>{item.name}</h2>
                                    <div>
                                        <i className="fa-regular fa-clock"></i>
                                        <p>{item.time} min</p>
                                    </div>
                                </div>
                                <div className="content">
                                    <div>
                                        {
                                            item.ingredients.map((sub_item) => (
                                                    <div className="ingredient">
                                                        <p>{sub_item.ingredient}: {sub_item.quantity} {sub_item.unit}</p>
                                                    </div>
                                                )
                                            )
                                        }
                                    </div>

                                    <div className="description">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))
                }
            </div>)}
        </section>
    );
}
