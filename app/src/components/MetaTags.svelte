<script>
	// Open Graph Doc : https://ogp.me/
	import { transformImage } from '$lib/utils/transformImage.js';
	import { page } from '$app/stores';

	export let title;
	export let description = '';
	export let image = null;
	export let focalPoint = null;


	//Cap the description to 160 characters
	function truncateDescription(desc) {
		const maxLength = 160;
		if (desc.length > maxLength) {
			return desc.substring(0, maxLength) + '...';
		}
		return desc;
	}

	$: _siteName = $page?.data?.siteSettings?.title || `meubelherstel`;

	// Transform Image
	$: transformedImages =
		image &&
		transformImage(
			image?.url,
			[
				// OG
				{ w: 1200, h: 630 },
				// Twitter
				{ w: 1200, h: 675 }
			],
			{
				fit: 'crop',
				auto: 'format',
				crop: 'entropy',
				...(focalPoint
					? {
							'fp-x': focalPoint.x,
							'fp-y': focalPoint.y,
							crop: 'focalpoint'
						}
					: {})
			}
		);
</script>

<title>{title ? `${title} | ${_siteName}` : _siteName}</title>
{#if description}
	<meta name="description" content={truncateDescription(description)} />
{/if}

{#if transformedImages && transformedImages.src(0)}
	<meta name="image" content={transformedImages.src(0)} />
{/if}

<!-- OpenGraph  -->
<meta property="og:title" content={title ? `${title} | ${_siteName}` : _siteName} />
<meta property="og:url" content={$page.url.href} />
<meta property="og:type" content="website" />
<meta property="og:site_name" content={_siteName} />

{#if description}
	<meta property="og:description" content={truncateDescription(description)} />
{/if}
{#if transformedImages && transformedImages.src(0)}
	<meta property="og:image" content={transformedImages.src(0)} />
{/if}

<!-- Twitter -->
<meta name="twitter:title" content={title ? `${title} | ${_siteName}` : _siteName} />
<meta name="twitter:url" content={$page.url.href} />

{#if description}
	<meta name="twitter:description" content={truncateDescription(description)} />
{/if}
{#if transformedImages && transformedImages.src(1)}
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={transformedImages.src(1)} />
{/if}
