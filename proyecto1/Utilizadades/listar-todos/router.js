export function generateRouterListarAll(name) {

    return `
  <pre><code class="javascript">
    router.get(\`\${ruta}\`/${name}, Authenticate(PERMITS.${name}), async function (req, res) {
      const querys = await ${name}Schema.parseAsync(req.query);

      const response = await ${name}(querys);

      return res.status(response.statusCode).json(response);
    });
  </code></pre>
    `;
  }
  