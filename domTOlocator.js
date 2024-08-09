function generateLocator(inputString) {
	// Extract the tag name, attributes, and their values
	const regex = /<(\w+)([\s\S]*?)>/;
	const match = regex.exec(inputString);

	if (!match) {
		return null;
	}

	const tagName = match[1];
	const attributes = match[2];

	// Check for role attribute
	const roleMatch = /role="([^"]+)"/.exec(attributes);
	if (roleMatch) {
		const roleName = roleMatch[1];
		return `page.getByRole('${tagName}', { name: '${roleName}' })`;
	}

	// Check for text content
	const textRegex = /<\w+.*?>([^<]+)<\/\w+>/;
	if (textRegex.test(inputString)) {
		const textContent = RegExp.$1.trim();
		if (textContent !== "…") {
			return `page.getByText('${textContent}')`;
		}
	}

	// Check for label
	const labelMatch = /label="([^"]+)"/.exec(attributes);
	if (labelMatch) {
		const labelText = labelMatch[1];
		return `page.getByLabel('${labelText}')`;
	}

	// Check for placeholder
	const placeholderMatch = /placeholder="([^"]+)"/.exec(attributes);
	if (placeholderMatch) {
		const placeholderText = placeholderMatch[1];
		return `page.getByPlaceholder('${placeholderText}')`;
	}

	// Check for alt text
	const altMatch = /alt="([^"]+)"/.exec(attributes);
	if (altMatch) {
		const altText = altMatch[1];
		return `page.getByAltText('${altText}')`;
	}

	// Check for title attribute
	const titleMatch = /title="([^"]+)"/.exec(attributes);
	if (titleMatch) {
		const titleText = titleMatch[1];
		return `page.getByTitle('${titleText}')`;
	}

	// Check for data-testid
	const testIdMatch = /data-testid="([^"]+)"/.exec(attributes);
	if (testIdMatch) {
		const testId = testIdMatch[1];
		return `page.getByTestId('${testId}')`;
	}

	// Check for href attribute if none of the above fit
	const hrefMatch = /href="([^"]+)"/.exec(attributes);
	if (hrefMatch) {
		const hrefValue = hrefMatch[1];
		return `page.locator('${tagName}[href="${hrefValue}"]')`;
	}

	// Check for class if none of the above fit
	const classMatch = /class="([^"]+)"/.exec(attributes);
	if (classMatch) {
		const classText = classMatch[1];
		return `page.locator('${tagName}[class="${classText}"]')`;
	}

	return null;
}

function makeDynamic(locator) {
    return locator.replace(/'(.*?)'/g, "${variable}");
}

// Test the function
let input = '<a class="nav-item" href="/finetune">Fine-tuning</a>';
let locator = generateLocator(input);
console.log(locator);  // Static locator
console.log(makeDynamic(locator));  // Dynamic locator

//...[Other tests]

// input = '<a aria-label="Reporting" href="https://app.asana.com/0/reporting/998035457938031" class="ThemeableCardPresentation--isValid ThemeableCardPresentation ThemeableInteractiveCardPresentation--isNotSelected ThemeableInteractiveCardPresentation--isEnabled ThemeableInteractiveCardPresentation SidebarNavigationLinkCard SidebarItemRow--isCleanAndClearSidebarEnabled SidebarTopNavLinks-reportingButton BaseLink"><div class="SidebarNavigationLinkCard-icon">…</div><span class="TypographyPresentation TypographyPresentation--colorNavigation TypographyPresentation--overflowTruncate TypographyPresentation--m SidebarNavigationLinkCard-label">…</span><div class="SidebarNavigationLinkCard-spacer">…</div></a>';
// locator = generateLocator(input);
// console.log(locator);  // Static locator
// console.log(makeDynamic(locator));  // Dynamic locator

// // Test the function
// input = '<a class="nav-item" href="/finetune">Fine-tuning</a>';
// console.log(generateLocator(input));

// input = '<span class="btn-label-inner">Save‍</span>';
// console.log(generateLocator(input));

// input =
// 	'<a href="https://stackoverflow.com/users/login?ssrc=head&amp;returnurl=https%3a%2f%2fstackoverflow.com%2fquestions%2f53395496%2fpause-javascript-when-executing-it-in-browser-console" class="s-topbar--item s-topbar--item__unset s-btn s-btn__filled ws-nowrap js-gps-track" role="menuitem" rel="nofollow" data-gps-track="login.click" data-ga="[&quot;top navigation&quot;,&quot;login button click&quot;,null,null,null]">Log in</a>';
// console.log(generateLocator(input));

// input = '<pre class="snippet-code-js lang-js s-code-block"><code class="hljs language-javascript">…</code></pre>';
// console.log(generateLocator(input));

// input = '<div class="BoardColumn BoardBody-column"><div class="BoardColumn-dragHandle" draggable="true">…</div><div class="BoardColumnScrollableContainer--boardsRevamp BoardColumnScrollableContainer">…</div></div>'
// console.log(generateLocator(input));

// input = '<h3 class="TypographyPresentation TypographyPresentation--colorDefault TypographyPresentation--overflowTruncate TypographyPresentation--h5 TypographyPresentation--fontWeightMedium BoardColumnHeaderTitle BoardColumnHeader-name">RazorMetrics</h3>'
// console.log(generateLocator(input));

// input = '<svg class="Icon StarIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M8.2,30c-0.4,0-0.7-0.1-1-0.3c-0.5-0.4-0.8-1-0.7-1.7l1.3-7.8l-5.7-5.5c-0.5-0.5-0.6-1.2-0.4-1.8c0.2-0.6,0.7-1.1,1.4-1.2l7.8-1.1l3.5-7.1c0.3-0.6,0.9-1,1.6-1c0,0,0,0,0,0c0.7,0,1.3,0.4,1.6,1v0l3.5,7.1l7.8,1.1c0.7,0.1,1.2,0.6,1.4,1.2c0.2,0.6,0,1.3-0.4,1.8l-5.7,5.5l1.3,7.8c0.1,0.7-0.2,1.3-0.7,1.7c-0.5,0.4-1.2,0.4-1.8,0.1l-7-3.7l-7,3.7C8.8,30,8.5,30,8.2,30z M16,23.9l7.5,3.9l-1.4-8.3l6.1-5.9l-8.4-1.2L16,4.8l-3.7,7.6l-8.4,1.2l6.1,5.9l-1.4,8.3L16,23.9z">…</path></svg>'
// console.log(generateLocator(input));

// input = '<a aria-label="Reporting" href="https://app.asana.com/0/reporting/998035457938031" class="ThemeableCardPresentation--isValid ThemeableCardPresentation ThemeableInteractiveCardPresentation--isNotSelected ThemeableInteractiveCardPresentation--isEnabled ThemeableInteractiveCardPresentation SidebarNavigationLinkCard SidebarItemRow--isCleanAndClearSidebarEnabled SidebarTopNavLinks-reportingButton BaseLink"><div class="SidebarNavigationLinkCard-icon">…</div><span class="TypographyPresentation TypographyPresentation--colorNavigation TypographyPresentation--overflowTruncate TypographyPresentation--m SidebarNavigationLinkCard-label">…</span><div class="SidebarNavigationLinkCard-spacer">…</div></a>'
// console.log(generateLocator(input));




