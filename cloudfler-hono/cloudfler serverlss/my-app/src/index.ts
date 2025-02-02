/**
 * IN THIS YOU CAN SEE WHEN YOU CREATE ANT EXPRESS IT MIGHT BE DIFF SO FOR THAT USE (HONO)
 * 
 * if you chosse l in terminal it connect your terminal to youyr cloudflare account and you can send request to make a worker from terminal
 * 
 * if you want to check your all details then use(npx wrangler whoami) it gives you all details and allow permission
 * 
 * (npm run dev) gives you a locallhost or start your server at locallhost
 *
 * and if you want to deploy then  1st connect you terminal to your cloudflare and use (npm run deploy) to deploy you can check in your worker inside your cloudflare
 *  
 * Bind resources to your worker in `wrangler.json`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 */
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		
		if (request.method === "GET") {
			return Response.json({
				message: "you sent a get req uest"
			});
		} else {
			return Response.json({
				message: "you did not send a get request"
			});
		}
	},
} satisfies ExportedHandler<Env>;


  