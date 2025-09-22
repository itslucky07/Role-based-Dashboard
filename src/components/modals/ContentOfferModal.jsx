import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Gift, Star, Clock, Tag } from 'lucide-react';

export const ContentOfferModal = ({ content, isOpen, onClose }) => {
  if (!content) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Gift className="h-5 w-5 text-orange-500" />
            <span>Special Offer</span>
          </DialogTitle>
          <DialogDescription>
            Exclusive deal just for you!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Content Image */}
          <div className="aspect-video bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg overflow-hidden relative">
            <img
              src={content.imageUrl}
              alt={content.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-xl font-bold">{content.title}</h3>
              </div>
            </div>
          </div>

          {/* Offer Details */}
          <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-4 rounded-lg border border-orange-200">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-orange-600" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">Exclusive Offer Details</h4>
                <p className="text-gray-700">{content.offer}</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Tag className="w-4 h-4" />
              <span>Limited time offer</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Don't miss out on this amazing deal!</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
              Claim Offer
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};