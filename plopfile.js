module.exports = function (plop) {
	plop.setHelper('surroundWithCurlyBraces', function(text) {
		return '{' + text + '}';
	});
  plop.setGenerator('component', {
    description: 'A basic component with optional props & stylesheet.',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Name of the component:'
    }, {
      type: 'confirm',
      name: 'stylesheet',
			message: 'Set up stylesheet?:',
			default: true
    }, {
      type: 'confirm',
      name: 'props',
			message: 'Set up props?:',
			default: true
    }],
		actions: [{
			type: 'add',
			path: 'src/components/{{name}}/{{name}}.tsx',
			templateFile: 'plop-templates/component.txt'
		}, {
			type: 'add',
			path: 'src/components/{{name}}/index.ts',
			templateFile: 'plop-templates/componentIndex.txt'
		}, {
			type: 'add',
			path: 'src/components/{{name}}/styles.ts',
			templateFile: 'plop-templates/componentStyles.txt',
			skip(data) {
				if (!data.stylesheet) {
					return 'Styles not included, skipping stylesheet';
				}
				else {
					return;
				}
			}
		}]
  });
  plop.setGenerator('page', {
    description: 'A page component with option props & stylesheet.',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Name of the page:'
    }, {
      type: 'input',
      name: 'path',
      message: 'Path for the page:'
    }, {
      type: 'confirm',
      name: 'stylesheet',
			message: 'Set up stylesheet?:',
			default: true
    }, {
      type: 'confirm',
      name: 'props',
			message: 'Set up props?:',
			default: true
    }],
		actions: [{
			type: 'add',
			path: 'src/pages/{{name}}/{{name}}.tsx',
			templateFile: 'plop-templates/component.txt'
		}, {
			type: 'add',
			path: 'src/pages/{{name}}/index.ts',
			templateFile: 'plop-templates/componentIndex.txt'
		}, {
			type: 'add',
			path: 'src/pages/{{name}}/styles.ts',
			templateFile: 'plop-templates/componentStyles.txt',
			skip(data) {
				if (!data.stylesheet) {
					return 'Styles not included, skipping stylesheet';
				}
				else {
					return;
				}
			}
		}, {
			type: 'append',
			path: 'src/App.tsx',
			pattern: /(\/\/ -- APPEND PAGE IMPORTS HERE --)/,
			template: `import {{name}} from 'pages/{{name}}';`
		}, {
			type: 'append',
			path: 'src/App.tsx',
			pattern: /({\/\* -- APPEND PAGE ROUTES HERE -- \*\/})/,
			template: `        <Route path='{{path}}' component={{surroundWithCurlyBraces name}} />`
		}]
  });
}