import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import NavBarItem from '../../src/components/navigation-bar-item';

describe("NavBarItem", () => {
    const category = {
        url: "https://someDomain/someCategory",
        text: "Some category"
    };
    const wrapper = shallow(
        <NavBarItem
            category={category}/>
    );

    it("should link to correct category page", () => {
        expect(wrapper.find("a").prop("href")).to.equal("https://someDomain/someCategory");
    });

    it("should display correct text", () => {
        expect(wrapper.find("a").text()).to.equal("Some category");
    });

});
