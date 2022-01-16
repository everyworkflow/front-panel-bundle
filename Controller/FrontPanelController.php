<?php

/**
 * @copyright EveryWorkflow. All rights reserved.
 */

declare(strict_types=1);

namespace EveryWorkflow\FrontPanelBundle\Controller;

use EveryWorkflow\CoreBundle\Annotation\EwRoute;
use EveryWorkflow\UrlRewriteBundle\Repository\UrlRewriteRepositoryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class FrontPanelController extends AbstractController
{
    protected UrlRewriteRepositoryInterface $urlRewriteRepository;

    public function __construct(UrlRewriteRepositoryInterface $urlRewriteRepository)
    {
        $this->urlRewriteRepository = $urlRewriteRepository;
    }

    #[EwRoute(
        path: '/{wildcard}',
        name: 'front_panel',
        priority: -1000,
        methods: 'GET',
        requirements: ['wildcard' => '.*']
    )]
    public function __invoke(string $wildcard = 'home'): Response
    {
        $data = [
            'page_title' => 'Front Panel',
        ];
        try {
            $urlRewrite = $this->urlRewriteRepository->findOne(['url' => $wildcard]);
            if ($urlRewrite->getData('meta_title')) {
                $data['page_title'] = $urlRewrite->getData('meta_title');
            }
            foreach (['meta_title', 'meta_description', 'meta_keyword'] as $key) {
                if ($urlRewrite->getData($key)) {
                    $data[$key] = $urlRewrite->getData($key);
                }
            }
        } catch (\Exception $e) {
            // Ignoring 404 pages for now
        }
        return $this->render('front-panel.html.twig', $data);
    }
}
