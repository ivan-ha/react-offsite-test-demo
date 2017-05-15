import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Greeting from '../../src/components/greeting';

describe("Greeting", () => {
    const wrapper = shallow(
        <Greeting
            user={"John"} onSignOutClick={null}/>
    );

    it("should greet the user", () => {
        expect(wrapper.find("b").text()).to.equal("Hello! John");
    });

});
