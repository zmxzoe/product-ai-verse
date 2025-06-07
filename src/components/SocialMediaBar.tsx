
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Twitter } from 'lucide-react';

const SocialMediaBar = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: 'https://discord.com',
      color: 'hover:text-indigo-400'
    },
    {
      name: '微信',
      icon: MessageCircle,
      url: '#',
      color: 'hover:text-green-500'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://whatsapp.com',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col gap-3 bg-background/80 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <Button
              key={social.name}
              variant="ghost"
              size="sm"
              className={`w-10 h-10 p-0 ${social.color} transition-colors`}
              onClick={() => window.open(social.url, '_blank')}
              title={social.name}
            >
              <IconComponent className="h-5 w-5" />
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMediaBar;
